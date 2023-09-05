import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdClose } from "react-icons/md";

import { useNavigate } from "react-router-dom";

export default function NavBar({ open, setOpen }) {
  const navigate = useNavigate();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-20"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="-translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="-translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900"></Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <MdClose className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8 h-full">
                      <div className="flow-root h-full">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200 flex flex-col h-full"
                        >
                          <li className="h-16 m-1 bg-primary text-dark flex items-center justify-center rounded-lg">
                            <button
                              className="w-full h-full"
                              onClick={() => navigate("/")}
                            >
                              Homepage
                            </button>
                          </li>
                          <li className="h-16 m-1 bg-primary text-dark flex items-center justify-center rounded-lg">
                            <button
                              className="w-full h-full"
                              onClick={() => navigate("/my-orders")}
                            >
                              My Orders
                            </button>
                          </li>
                          <li className="h-16 m-1 bg-primary text-dark flex items-center justify-center rounded-lg">
                            <button
                              className="w-full h-full"
                              onClick={() => navigate("/about-me")}
                            >
                              About Me
                            </button>
                          </li>
                          <li className="16 m-5 bg-primary text-dark flex items-end justify-center rounded-lg h-full py-5">
                            <button
                              className="w-full"
                              onClick={() => navigate("/order")}
                            >
                              Order
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
