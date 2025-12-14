import { Sun, Moon } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  price: number;
}

const morningItems: MenuItem[] = [
  {
    name: "Palav",
    description:
      "Fragrant vegetable pulao cooked with aromatic spices and fresh seasonal vegetables.",
    price: 40,
  },
  {
    name: "Idli",
    description:
      "Soft, fluffy steamed rice cakes served with coconut chutney and sambar.",
    price: 40,
  },
  {
    name: "Dosa",
    description:
      "Crispy golden crepe made from fermented rice batter, served with chutneys.",
    price: 40,
  },
  {
    name: "Lemon Rice",
    description:
      "Tangy and aromatic rice tempered with mustard seeds, curry leaves, and fresh lemon.",
    price: 40,
  },
  {
    name: "Poori",
    description:
      "Deep-fried fluffy bread served with spiced potato curry and pickle.",
    price: 40,
  },
];

const eveningItems: MenuItem[] = [
  {
    name: "Bonda",
    description:
      "Crispy deep-fried potato dumplings coated in spiced gram flour batter.",
    price: 20,
  },
  {
    name: "Bajji",
    description:
      "Assorted vegetable fritters - onion, chilli, and potato dipped in chickpea batter.",
    price: 20,
  },
  {
    name: "Pani Puri",
    description:
      "Crispy hollow puris filled with spiced water, tamarind chutney, and chickpeas.",
    price: 30,
  },
  {
    name: "Masala Puri",
    description:
      "Crushed puris topped with spiced peas curry, onions, and tangy chutneys.",
    price: 30,
  },
  {
    name: "Aloo Bonda",
    description:
      "Spiced mashed potato balls, deep-fried to golden perfection, served with green chutney.",
    price: 20,
  },
];

const MenuCard = ({ item }: { item: MenuItem }) => (
  <div className="menu-card group">
    <div className="flex justify-between items-start gap-4 mb-3">
      <h4 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
        {item.name}
      </h4>
      <span className="text-lg font-bold text-primary whitespace-nowrap">
        ₹{item.price}
      </span>
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed">
      {item.description}
    </p>
  </div>
);

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 md:py-28">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Our Menu</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Handcrafted dishes prepared fresh with authentic recipes passed down
            through generations
          </p>
        </div>

        {/* Morning Menu */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/20">
              <Sun className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Morning Tiffin
              </h3>
              <p className="text-sm text-muted-foreground">
                7:30 AM – 11:00 AM
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {morningItems.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* Evening Menu */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/15">
              <Moon className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Evening Chats
              </h3>
              <p className="text-sm text-muted-foreground">
                5:00 PM – 8:30 PM
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {eveningItems.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
