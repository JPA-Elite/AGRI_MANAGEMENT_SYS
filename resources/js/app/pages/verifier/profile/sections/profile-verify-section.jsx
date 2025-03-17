import { useEffect, useState } from "react";
import {
    CloseButton,
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import {
    CheckBadgeIcon,
    CheckIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { FaRegFilePdf } from "react-icons/fa6";
import {
    get_personal_information_by_id_thunk,
    verify_beneficiary_thunk,
} from "@/app/redux/personal-information-thunk";
import Swal from "sweetalert2";
import store from "@/app/store/store";

export default function ProfileVerifySection({ data }) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const id = window.location.pathname.split("/")[3];

    async function accept_verification(value) {
        setLoading(true);
        try {
            await store.dispatch(
                verify_beneficiary_thunk({
                    ...data,
                    status: value,
                })
            );
            await store.dispatch(get_personal_information_by_id_thunk(id));
            setLoading(false);
            setOpen(false);
            Swal.fire({
                title: "Success!",
                text: `Application ${value}.`,
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                type="button"
                className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-6 py-3 text-lg font-semibold text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-green-200 focus:z-10"
            >
                <CheckBadgeIcon className="h-6 mr-2 text-green-600" />
                Verify Beneficiary
            </button>
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                            <div>
                                <div className="flex items-center justify-end">
                                    <button onClick={() => setOpen(!open)}>
                                        <XMarkIcon className="h-6 font-black text-red-600" />
                                    </button>
                                </div>
                                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
                                    <CheckIcon
                                        aria-hidden="true"
                                        className="size-6 text-green-600"
                                    />
                                </div>
                                <div className="mt-3 text-center sm:mt-5">
                                    <DialogTitle
                                        as="h3"
                                        className="text-base font-semibold text-gray-900"
                                    >
                                        Verify Beneficiary Confirmation
                                    </DialogTitle>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Are you sure you want to verify the
                                            beneficiary?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                <button
                                    type="button"
                                    disabled={loading}
                                    onClick={() =>
                                        accept_verification("active")
                                    }
                                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 sm:col-start-2"
                                >
                                    {loading ? "Loading..." : "Confirm"}
                                </button>
                                <button
                                    type="button"
                                    disabled={loading}
                                    onClick={() =>
                                        accept_verification("declined")
                                    }
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 text-white px-3 py-2 text-sm font-semibold  ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-red-500 sm:col-start-1 sm:mt-0"
                                >
                                    {loading ? "Loading..." : "Declined"}
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
