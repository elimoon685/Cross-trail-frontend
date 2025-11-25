'use client'
import { useFormContext } from "react-hook-form";
import { FormValues } from "@/interface/userRequestType";
import { useEffect, useState, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
const OrganizerExperienceForm = () => {

  const { register, setValue, watch } = useFormContext<FormValues>();
  const [previews, setPreviews] = useState<{ url: string; name: string }[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const existingFiles = watch("screenShots") || [];
  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const validFiles: File[] = [];
    const newPreviews: { url: string; name: string }[] = [];

    Array.from(files).forEach((file) => {
      if (!file.type.startsWith("image/")) return;
      if (previews.length >= 12) return;
      validFiles.push(file);
      newPreviews.push({
        name: file.name,
        url: URL.createObjectURL(file),
      });
    });
    setValue("screenShots", [...existingFiles, ...validFiles], {
      shouldDirty: true,
      shouldValidate: true,
    });

    // 2. 本地 state 用来展示缩略图
    setPreviews((prev) => [...prev, ...newPreviews]);
  }
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  }
  const deleteScreenShots = (name: string) => {
    setPreviews(prev => prev.filter(p => p.name !== name));
    const currentFiles = existingFiles || [];
    const nextFiles = currentFiles.filter(file => file.name !== name);
    setValue("screenShots", nextFiles, {
      shouldDirty: true,
      shouldValidate: true,
    });
  }
  return (

    <div className="flex flex-col">
      <h1 className="text-[18px] font-bold self-start">Hiking & organizing experience</h1>
      <div className="columns-1 md:columns-2 [column-gap:100px] mt-2">
        <div className="flex flex-col mt-3">
          <label htmlFor="hikeFrequency" className="block text-[14px] self-start">How often do you hike?</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="e.g. 1-2 times per week"
            {...register("hikeFrequency")}
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="hikeDescription" className="block text-[14px] self-start">Typical distance & elevtion</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="e.g. 20-30km, 500-1000m elevation"
            {...register("hikeDescription")}
          />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="experienceDescription" className="block text-[14px] self-start">Previous experience leading groups</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="e.g. 20-30km, 500-1000m elevation"
            {...register("hikeDescription")}
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="activityLink" className="block text-[14px] self-start">Activity link</label>

          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"

            placeholder="any profile link can prove your activities records, e.g. garmin, strava, alltrails"
            {...register("activityLink")}
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="uploadScreenShots" className="block text-[14px] self-start">Upload screenShots</label>
          <div className="flex flex-wrap justify-start py-1 px-1 gap-1 text-center border-2 border-dashed border-black bg-[#75a3c5] rounded-sm h-[180px] w-[320px]"
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
          >


            {previews.length === 0 ? (
              <div className="w-full h-full flex flex-col items-center justify-center  text-white/90">
                <p className="font-medium">Drag & drop activity screenshots</p>
                <p className="mt-1">PNG / JPG, at least 10 activities, no more than 12</p>
              </div>) :
              (

                previews.map((p, i) => (
                  <div
                    key={p.url + i}
                    className="w-10 h-20 border bg-gray-100 flex items-center justify-center relative"
                  >
                    <img src={p.url} alt={p.name} className="w-full h-full object-cover hover:scale-105" />
                    <div className="absolute w-4 h-4 rounded-full bg-white -top-[7%] -right-[10%] z-50 opacity-70 text-center p-0.5 hover:scale-105" onClick={(e) => { e.stopPropagation(); e.preventDefault(); deleteScreenShots(p.name) }}><RxCross2 className="w-3 h-3" /></div>
                  </div>
                ))
              )}


          </div>
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={onChangeInput}
          />
          <button className="bg-[#345975] px-2 py-1 rounded-lg self-start mt-2"
            onClick={() => fileInputRef.current?.click()}

          >Choose screenShots</button>
        </div>
      </div>

    </div>

  )
}
export default OrganizerExperienceForm