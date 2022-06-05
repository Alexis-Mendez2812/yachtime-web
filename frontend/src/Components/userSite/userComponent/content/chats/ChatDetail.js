import React, { useState } from "react";
import "./chatDetail.css";

export const ChatDetail = () => {
	const [chats, setChats] = useState(false);
	return (
		<div className="chat_container">
			<div className="listChats">
				{chats ? (
					"List of chats"
				) : (
					<div className="no__chats">
						You don't have any chats yet.{" "}
						<i class="fa-solid fa-comments"></i>
					</div>
				)}
			</div>
			<div className="ChatDetail">
				<div className="chat__view"></div>
				<div className="chat_buttons_container">
					<div className="caja_InTexto">
						<input
							type="text"
							placeholder="Type your message here"
						/>
					</div>
					<div className="buttonSendChat">
						<i class="fa-solid fa-paper-plane"></i>
					</div>
				</div>
			</div>
		</div>
	);
};
