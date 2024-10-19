import { icons } from "../../data/data";
import Icon from "../Icon";

const ListsIcon = () => {
  return (
    <div className="text-center md:text-end space-x-2">
      {icons?.map((icon) => (
        <Icon key={icon?._id} data={icon} />
      ))}
    </div>
  );
};

export default ListsIcon;
