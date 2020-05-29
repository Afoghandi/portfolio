import React from "react";
import { Button } from "react-scroll";

export default function Contact() {
	return (
		<section className="contact-section">
			<div>
				<div className="main-container">
					<p></p>
					<div className="contact-form">
						<div>
							<h2>send me an email</h2>
							<form
								action="https://formspree.io/ralphaeloshun@gmail.com"
								method="POST"
							>
								<input
									type="text"
									placeholder="your name"
									className="input"
									required
								></input>
								<input
									type="text"
									placeholder="last name"
									className="input"
									required
								></input>
								<input
									type="Email"
									placeholder="email"
									className="input"
									required
								></input>
								<input
									type="text"
									placeholder="subject"
									className="input"
									required
								></input>
								<textarea
									name="message"
									placeholder="message"
									className=""
									required
									rows="5"
								></textarea>
								<Button
									className="submit"
									type="submit"
									value="submit"
								></Button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
