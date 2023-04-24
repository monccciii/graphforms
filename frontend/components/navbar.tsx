import { useRouter } from "next/router"

export default function Navbar() {
    const router = useRouter();
    return (
        <div id='navbar' className='flex text-center py-5'>
          <p onClick={()=>router.push('/hub')} className='mx-auto font-medium text-xl'>GraphForms</p>
        </div>
    )
}