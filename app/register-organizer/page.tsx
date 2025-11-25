'use client'
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import PersonalInfoForm from "@/component/useClientComponent/personalInfo";
import OrganizerExperienceForm from "@/component/useClientComponent/organizerExperienceForm";
import { FormValues } from "@/interface/userRequestType";

const RegisterOrganizer = () => {
  const methods = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log("submit", data);
  };
  return (

    <FormProvider {...methods}>
      <div className="flex justify-center min-h-screen bg-[#f7f4da]">
      <div className="flex flex-col self-center mt-5 border border-gray-300 rounded-2xl px-10 py-10 bg-white">

        <div className="mb-5">
          <div className="flex justify-between items-center mb-3">
            <p className="text-3xl text-[#345975] font-bold">Apply to become an organizer</p>
            <div className="px-2 py-1 bg-[#345975] rounded-lg"><span className="px-2 py-1 text-gray-300">Organizer</span></div>
          </div>
          <p className="text-xl">Share your details and recent activity so we can trust you to lead safe, enjoyble hikes</p>
        </div>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8 text-center">
          <PersonalInfoForm />
          <OrganizerExperienceForm />
          <button type="submit" className="bg-[#345975] text-2xl text-gray-50 px-4 py-1 rounded-2xl font-bold">Submit</button>
        </form>
      </div>
      </div>
    </FormProvider>

  )
}
export default RegisterOrganizer