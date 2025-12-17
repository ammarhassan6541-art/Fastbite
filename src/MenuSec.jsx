
import img  from "./istockphoto-1254672762-612x612.jpg"
import img2  from "./ai-generated-freshly-fried-gourmet-french-fries-a-crunchy-and-unhealthy-snack-generated-by-ai-photo.jpg"
import img3  from "./istockphoto-1471609071-612x612.jpg"
import img4  from "./360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg"
import img5  from "./2-step-spam-grilled-cheese-655.jpg"
import img6  from "./istockphoto-1126893721-612x612.jpg"


export function MenuSection() {
    const menuItems = [
        { title: 'Cheese Burger', price: '$5.99', image: img},
        { title: 'French Fries', price: '$2.99', image: img2 },
        { title: 'Chicken Nuggets', price: '$4.99', image: img3 },
        { title: 'Veggie Pizza', price: '$8.49', image : img4  },
        { title: 'Grilled Sandwich', price: '$3.99', image: img5  },
        { title: 'Chocolate Milkshake', price: '$2.49', image : img6},

    ];


    return (
        <section id="menu" className="py-20 bg-white">
            <div className="w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Menu</h2>

                <div className="flex flex-wrap gap-8">
                    {menuItems.map((item, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl shadow p-4 text-center w-full sm:w-[48%] md:w-[31%]">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-yellow-500 font-bold mt-2">{item.price}</p>
                            <div className="w-[max-conyent] h-[]"></div>
                        </div>
                        
                    ))}
                </div>

            </div>
        </section>

    );
}