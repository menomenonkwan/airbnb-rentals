const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <div className='container-fluid bg-dark text-light small text-center p-3'>&copy; {year} Brannon Lee</div>
  )
}
