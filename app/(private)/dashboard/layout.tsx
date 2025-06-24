

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   {/* {children} */}
   <div style={{display:"flex"}}>
    <div style={{width:"300px",background:"white",height:"100vh",color:"black"}}>
        <div>Home</div>
        <div>About</div>
        <div>Section</div>


    </div>
    <div>
        {children}
    </div>

   </div>
   </>
  );
}
