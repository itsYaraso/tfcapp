import Link from 'next/link';

export default function ContentMenu() {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="">Menu</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-neutral-950 text-base-content min-h-full w-80 p-4">
                    <li><Link href="/login" className="font-bold">Login</Link></li>
                    <li><Link href="/register" className="font-bold">Register</Link></li>
                    <li><Link href="/lfg" className="font-bold">LFG</Link></li>
                    <li><Link href="/info" className="font-bold">Info</Link></li>
                    <li><Link href="/support" className="font-bold">Support</Link></li>
                    <div className="divider divider-neutral"></div>
                    <li><Link href="/news" className="font-bold mt-3">News</Link></li>
                    <li><Link href="/descendants" className="font-bold mt-3">Descendants</Link></li>
                    <li><Link href="/weapons" className="font-bold mt-3">Weapons</Link></li>
                    <li><Link href="/modules" className="font-bold mt-3">Modules</Link></li>
                    <li><Link href="/reactor" className="font-bold mt-3">Reactors</Link></li>
                    <li><Link href="/ematerials" className="font-bold mt-3">Enhancement Materials</Link></li>
                    <li><Link href="/ecomponents" className="font-bold mt-3">External Components</Link></li>
                    <li><Link href="/cmaterials" className="font-bold mt-3">Core Material</Link></li>
                    <li><Link href="/bmaterials" className="font-bold mt-3">Basic Materials</Link></li>
                    <li><Link href="/amaterials" className="font-bold mt-3">Amorphus Materials</Link></li>
                    <li><Link href="/vintercept" className="font-bold mt-3">Void Intercept</Link></li>
                </ul>
            </div>
        </div>
    );
}

