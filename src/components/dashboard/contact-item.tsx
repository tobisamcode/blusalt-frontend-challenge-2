interface ContactItemProps {
  name: string;
  avatar: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ name, avatar }) => {
  return (
    <div className="flex items-center space-x-3">
      <img src={avatar} alt={name} className="w-6 h-6 rounded-full" />
      <p className="text-sm font-inter font-light">{name}</p>
    </div>
  );
};

export default ContactItem;
