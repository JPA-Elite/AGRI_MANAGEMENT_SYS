import React from 'react'

export default function GovernmentAffiliationComponent() {
  return (
    <div>
        <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base/7 font-semibold text-gray-900">
                                Government Programs Affiliation
                            </h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                Use a permanent address where you can receive
                                mail.
                            </p>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                                <div className="sm:col-span-4 border-r border-gray-900/30">
                                <label
                                        htmlFor="pwd"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Person with Disability (PWD)?
                                    </label>
                                    <div className="mt-2">
                                    <div className="flex items-center gap-x-3 mb-3">
                  <input
                    id="pwdyes"
                    name="pwd"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label htmlFor="pwdyes" className="block text-sm/6 font-medium text-gray-900">
                    YES
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="pwdno"
                    name="pwd"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label htmlFor="pwdno" className="block text-sm/6 font-medium text-gray-900">
                    NO
                  </label>
                </div>
                                    </div>
                                </div>

                                <div className="sm:col-span-4 border-r border-gray-900/30">
                                <label
                                        htmlFor="4ps"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        4P's Beneficiary?
                                    </label>
                                    <div className="mt-2">
                                    <div className="flex items-center gap-x-3 mb-3">
                  <input
                    id="4psyes"
                    name="4ps"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label htmlFor="4psyes" className="block text-sm/6 font-medium text-gray-900">
                    YES
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="4psno"
                    name="4ps"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label htmlFor="4psno" className="block text-sm/6 font-medium text-gray-900">
                    NO
                  </label>
                </div>
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                <label
                                        htmlFor="education"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Member of an Indigenous Group?
                                    </label>
                                    <div className="mt-2">
                                    <div className="flex items-center gap-x-3 mb-3">
                  <input
                    id="indigenousyes"
                    name="indigenous"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label htmlFor="indigenousyes" className="block text-sm/6 font-medium text-gray-900">
                    YES
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="indigenousno"
                    name="indigenous"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label htmlFor="indigenousno" className="block text-sm/6 font-medium text-gray-900">
                    NO
                  </label>
                </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                        <div className="sm:col-span-6 border-r border-gray-900/30">
                                <label
                                        htmlFor="govid"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        With Government ID?
                                    </label>
                                    <div className="mt-2">
                                    <div className="flex items-center gap-x-3 mb-3">
                  <input
                    id="govidyes"
                    name="govid"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label htmlFor="govidyes" className="block text-sm/6 font-medium text-gray-900">
                    YES
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="govidno"
                    name="govid"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label htmlFor="govidno" className="block text-sm/6 font-medium text-gray-900">
                    NO
                  </label>
                </div>
                                    </div>
                                </div>

                                <div className="sm:col-span-6 border-r border-gray-900/30">
                                <label
                                        htmlFor="farmassoc"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Member of any Farmers Association/Cooperative?
                                    </label>
                                    <div className="mt-2">
                                    <div className="flex items-center gap-x-3 mb-3">
                  <input
                    id="farmassocyes"
                    name="farmassoc"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label htmlFor="farmassocyes" className="block text-sm/6 font-medium text-gray-900">
                    YES
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="farmassocno"
                    name="farmassoc"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label htmlFor="farmassocno" className="block text-sm/6 font-medium text-gray-900">
                    NO
                  </label>
                </div>
                                    </div>
                                </div>
                        </div>
    </div>
  )
}
