import styles from "./styles.module.css";

const Main = (props) => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
			<a href="https://www.eveit.in/"><img src={require("../display.jpg")} className="my-4" style={{"height":"100px"}} alt="..."/></a>
				<h1>Welcome To eveIT</h1>

				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;
