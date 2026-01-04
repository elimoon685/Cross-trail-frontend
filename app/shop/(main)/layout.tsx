import ShopHeader from "@/component/shopHeader";

export default function ShopMainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ShopHeader />
      {children}
    </>
  );
}
