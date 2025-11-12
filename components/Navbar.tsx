const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-12 gap-x-8 text-2xl bg-base-300">
        <a href='/' className="hover:underline">Home</a>
        <a href='/skills' className="hover:underline">Skills</a>
        <a href='/contact' className="hover:underline">Contact</a>
    </div>
  )
}
export default Navbar