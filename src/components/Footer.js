import React, { Component } from "react";
import { ProjectConsumer } from "./context";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from "react-icons/fa";

export default function Footer() {
	return (
		<ProjectConsumer>
			{(value) => {
				const { social } = value;
				return (
					<footer className="container">
						<div className="main-content">
							<div className="left box">
								<div className="content">
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing
										elit.Delectus, quam.Sit accusantium rerum iure impedit
										fugiat!Nihil quaerat illo voluptates vitae molestias, rerum
										numquam necessitatibus. Perferendis aut voluptas consectetur
										eligendi.{" "}
									</p>

									<div className="social">
										{social.map((item) => {
											return (
												<a href={item.url} className="icon" key={item.id}>
													<span className="fab">{item.icon}</span>
												</a>
											);
										})}
									</div>
								</div>
							</div>
							<div className="center box">
								<h2>Address</h2>
								<div className="content">
									<div className="place">
										<span className="fas">
											<FaMapMarkerAlt className="contact" />{" "}
										</span>
										<span className="text"> Estcourt Close, Gloucester</span>
									</div>
									<div className="phone">
										<span className="fas">
											<FaPhoneAlt className="contact" />{" "}
										</span>
										<span className="text"> 07584040980</span>
									</div>
									<div className="email">
										<span className="fas">
											<FaEnvelopeOpen className="contact" />{" "}
										</span>
										<span className="text"> ralphaeloshun@gmail.com</span>
									</div>
								</div>
							</div>
							<div className="right box">
								<h2>Contact me</h2>
								<div className="content">
									<form action="#">
										<div className="email">
											<div className="text">Email*</div>
											<input
												type="email"
												className="input-text"
												required
											></input>
										</div>
										<div className="msg">
											<div className="text">message*</div>
											<textarea
												rows="2"
												cols="25"
												className="textarea-text"
												required
											></textarea>
										</div>
										<div className="btn">
											<button className="btnPrimaryLight"> send </button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</footer>
				);
			}}
		</ProjectConsumer>
	);
}
