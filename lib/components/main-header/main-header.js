import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import MainHeaderbg from "./main-header-BG";
import NavLink from "../nav-Link/nav-link";
export default function MainHeader() {
  return (
    <>
      <MainHeaderbg />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate of food" priority />
          <h3>The NextLevel Food</h3>
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meal"> Find Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community Channel</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
