export default function Footer({ HashLink, setShowModal }) {
  return (
    <footer className="flex justify">
      <div>© 2023 Trainlogix</div> | <div>All Rights Reserved</div> |
      <HashLink
        target="_blank"
        to="https://reentrytorecovery.com/wp-content/uploads/2022/10/TERMS-OF-SERVICE-for-AxxS-Tablet.pdf"
      >
        Privacy Policy
      </HashLink>
      |<HashLink to="/privacy#nav">Terms & Conditions</HashLink>|
      <a
        href="javascript:void(0)"
        onClick={() => {
          setShowModal("refund");
        }}
      >
        Refund Policy
      </a>
    </footer>
  );
}
