import { Stack } from '@twilio-paste/stack';
import { MenuItemConnected } from './MenuItemConnected';

export const MenuItems = ({ items }) => {
  return (
    <Stack orientation="vertical" spacing="space60">
      {items.map((item) => (
        // <MenuItem {...item} key={item.uuid} />
        <MenuItemConnected {...item} key={item.uuid} />
      ))}
    </Stack>
  );
};
