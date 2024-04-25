import Image from "next/image";

export default function Header() {
  return (
    <header>
      <nav>
        <h1 style={{display: 'none'}}>rinaofk</h1>

        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/works">Works</a></li>
        </ul>
      </nav>
    </header>
  );
}
