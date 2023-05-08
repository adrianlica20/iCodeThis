const writeMsgBtn = document.getElementById("write-msg-btn");
const searchbar = document.getElementById("searchbar");
const messagesContainer = document.getElementById("messages");

const messages = [
  {
    user: "Violet Webb",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde harum, earum velit",
    profilePic:
      "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    user: "Correy Burns",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde harum, earum velit",
    profilePic:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    user: "Charlie Aguilar",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde harum, earum velit",
    profilePic:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHByb2ZpbGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    user: "Florence hardy",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde harum, earum velit",
    profilePic:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2ZpbGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    user: "Elsie Clark",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde harum, earum velit",
    profilePic:
      "https://images.unsplash.com/photo-1577565177023-d0f29c354b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb2ZpbGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
];

let userID = 1;

const appendMsgs = () => {
  const userContainer = document.createElement("div");
  userContainer.classList.add(
    "user",
    "flex",
    "items-center",
    "gap-3",
    "transition",
    "hover:shadow-lg",
    "hover:cursor-pointer"
  );
  userContainer.setAttribute("id", `user-${userID}`);

  const userImg = document.createElement("img");
  userImg.classList.add(
    "avatar",
    "w-12",
    "h-12",
    "rounded-full",
    "object-cover",
    "flex-none"
  );
  userImg.setAttribute("src", messages[userID].profilePic);

  const msgWrapper = document.createElement("div");
  msgWrapper.classList.add("flex", "flex-col");

  const userName = document.createElement("span");
  userName.classList.add("user-name", "text-xs", "font-semibold");
  userName.innerText = messages[userID].user;

  const userMsg = document.createElement("p");
  userMsg.classList.add(
    "user-message",
    "text-[0.7rem]",
    "font-light",
    "line-clamp-2"
  );
  userMsg.innerText = messages[userID].message;

  msgWrapper.appendChild(userName);
  msgWrapper.appendChild(userMsg);
  userContainer.appendChild(userImg);
  userContainer.appendChild(msgWrapper);
  messagesContainer.appendChild(userContainer);
};

writeMsgBtn.addEventListener("click", () => {
  appendMsgs();
  if (userID < 4) {
    userID++;
  }
});
