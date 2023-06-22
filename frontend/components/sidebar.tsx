import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars } from 'react-icons/fa';

function Sidebar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="m-0 p-0 box-border fixed left-0 top-0 h-full">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="sidebar"
            initial={{ width: '45px' }}
            animate={{ width: '200px', backgroundColor: 'rgb(255, 255, 255)' }}
            exit={{ width: '45px', backgroundColor: 'transparent' }}
            transition={{ duration: 0.2 }}
            className="h-full rounded-r-md overflow-hidden bg-transparent text-black"
          >
            <div className="flex items-center justify-between p-4">
              <h1 className="text-lg font-bold leading-none">
                <Link href="/hub">GraphForms</Link>
              </h1>
              <div onClick={toggleSidebar} className="mt-2">
                <FaBars  />
              </div>
            </div>

            <section className="px-4 py-6 space-y-6">
              <button onClick={()=>router.push('/workspace/createform')} className="w-full bg-black text-white text-lg font-semibold py-2 rounded-full">
                New Form
              </button>
              <div className="font-semibold space-y-8">
                <Link href="/hub" className="flex items-center gap-4 hover:text-gray-900">
                  <div className="w-4 h-4"></div>
                  <div>Hub</div>
                </Link>
                <Link href="/workspace" className="flex items-center gap-4 hover:text-gray-900">
                  <div className="w-4 h-4"></div>
                  <div>Workspace</div>
                </Link>
                <Link href="/updates" className="flex items-center gap-4 hover:text-gray-900">
                  <div className="w-4 h-4"></div>
                  <div>Updates</div>
                </Link>
                <Link href="/youraccount" className="flex items-center gap-4 hover:text-gray-900">
                  <div className="w-4 h-4"></div>
                  <div>Your Account</div>
                </Link>
                <Link href="/hub" className="flex items-center gap-4 hover:text-gray-900">
                  <div className="w-4 h-4"></div>
                  <div>Settings</div>
                </Link>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
      {!isOpen && (
        <motion.div
          key="button"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="flex items-center justify-center h-full bg-transparent"
        >
          <div className="absolute top-0 left-0 p-5">
            <FaBars onClick={toggleSidebar} />
            </div>
        </motion.div>
      )}
    </div>
  );
}

export default Sidebar;
