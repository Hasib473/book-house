import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col min-h-screen">
  <main className="flex-grow">
    {/* তোমার মূল কনটেন্ট */}
  </main>

  <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
    <nav className="grid grid-flow-col gap-4">
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav>
    
    <aside>
      <p>
        Copyright © {new Date().getFullYear()} - All right reserved by ACME
        Industries Ltd
      </p>
    </aside>
  </footer>
</div>

        </div>
    );
};

export default Footer;