import axios from "axios";

const ChatBot = () => {
  return (
    <div
      className="bg-white rounded-lg p-2 mb-4"
      style={{
        boxShadow: "0 0 5px rgba(0,0,0,0.25)",
      }}
    >
      <div className="flex justify-start mt-[10px]">
        <div className="bg-blue-500 p-2 text-white rounded-lg chat-convo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          veritatis perspiciatis deleniti non earum ut fuga inventore, tempore
          blanditiis omnis ea corrupti impedit voluptatum dolores voluptas vero
          assumenda autem voluptatibus perferendis aliquam dicta harum. Eos
          vitae quod exercitationem amet accusantium.
        </div>
      </div>
      <div className="flex justify-end mt-[10px] ">
        <div className="bg-green-500 p-2 text-white rounded-lg user-convo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          veritatis perspiciatis deleniti non earum ut fuga inventore, tempore
          blanditiis omnis ea corrupti impedit voluptatum dolores voluptas vero
          assumenda autem voluptatibus perferendis aliquam dicta harum. Eos
          vitae quod exercitationem amet accusantium.
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
