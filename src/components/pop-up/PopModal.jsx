import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { RxCross1 } from "react-icons/rx";



const PopModal = ({ isOpen, closeModal, title, children }) => {

    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                  <div className=''>
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 ml-10 text-gray-900">
                      {title}
                    </Dialog.Title>
                    <div className='relative'>
                      <div className="mt-4">{children}</div>
                      <div className="absolute -top-10 right-5">
                        <button
                          type="button"
                          className="text-xl hover:text-red-400 duration-200"
                          onClick={closeModal}
                        >
                          <RxCross1 />
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  };


    
  export default PopModal;