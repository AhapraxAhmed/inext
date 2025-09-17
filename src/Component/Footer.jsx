import { footerLinks } from "../Constant"

const Footer = () => {
    return (
        <footer className="py-5 sm:px-10 px-5">
            <div className="screen-max-width">
                <div>
                    <p className="font-semibold text-gray-400 text-xs">
                        More ways to shop:{' '}
                        <span className="underline text-blue-400">
                            Find an Apple Store {' '}
                        </span>
                        or
                        <span className="underline text-blue-400">
                            {' '}Other retailer
                        </span> {' '}
                        near you.
                    </p>
                    <p className="font-semibold text-gray-400 text-xs">
                        or Call 0314-77141-714
                    </p>
                </div>
                <hr className="bg-neutral-700 my-7 h-[1px] w-full" />
                <div className="flex md:flex-row flex-col
                    md:items-center justify-between marginForFooter">
                    <p className="font-semibold text-gray-400 text-xs">
                        CopyRight @2025 AHAPRAX. All Rights Reserved.
                    </p>
                    <div className="flex">
                        {footerLinks.map((link, i) => (
                            <p key={link} className="font-semibold text-gray-400 
                                text-xs">
                                {link}{' '}
                                {i !== footerLinks.length - 1 && (
                                    <span className="mx-2"> | </span>
                                )}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer