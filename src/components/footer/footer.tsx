import Link from 'next/link'

export default function Footer() {
  return (
  <footer>
    <small>&copy; 2023 rinaofk</small>
    <nav>
      <ul>
        <li>
          <span>rs.ivy04</span>
        </li>
        <li>
          <Link href="https://github.com/rixcx" rel="noopener noreferrer" target="_blank">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="https://linkedin.com/in/rina-ofuku-3329002b9" rel="noopener noreferrer" target="_blank">
            Linkedin
          </Link>
        </li>
        <li>
          <Link href="/common/RinaOfuku-resume.pdf" rel="noopener noreferrer" target="_blank">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  </footer>
  );
}
