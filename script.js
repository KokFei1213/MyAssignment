document.addEventListener("DOMContentLoaded", function () {
    const countrySelect = document.getElementById("country");
    const hotelImage = document.getElementById("hotel-image");
    const roomTypeSpan = document.getElementById("room-type");
    const roomImage = document.getElementById("room-image");
    const roomPrice = document.getElementById("room-price");
    const prevRoomBtn = document.getElementById("prev-room");
    const nextRoomBtn = document.getElementById("next-room");
    const paymentBtn = document.getElementById("payment-btn");
    const paymentOptions = document.getElementById("payment-options");
    const hotelImageContainer = document.querySelector('.hotel-image-container');
    const roomImageContainer = document.querySelector('.room-image-container');

    function updateImageVisibility() {
        if (countrySelect.value === "") {
            hotelImageContainer.style.display = 'none';
            roomImageContainer.style.display = 'none';
        } else {
            hotelImageContainer.style.display = 'block';
            roomImageContainer.style.display = 'block';
        }
    }

    countrySelect.addEventListener('change', updateImageVisibility);

    // Initial check
    updateImageVisibility();

    // Hotel images mapping
    const hotelImages = {
        "Paris": "images/Paris.jpg",
        "London": "images/London.jpg",
        "Rome": "images/Rome.jpg",
        "Beijing": "images/Beijing.jpg",
        "Tokyo": "images/Tokyo.jpg",
        "Kuala Lumpur": "images/Kuala_Lumpur.jpg"
    };

    // Room types data
    const roomTypes = {
        "Paris": [
            { name: "Single Bed Room", img: "images/Paris-Single Bed Room.png", price: "$100" },
            { name: "Double Bed Room", img: "images/Paris-Double Bed Room.png", price: "$150" },
            { name: "Standard Suite", img: "images/Paris-Standard Suite.png", price: "$200" },
            { name: "Presidential Suite", img: "images/Paris-Presidential Suite.png", price: "$500" }
        ],
        "London": [
            { name: "Single Bed Room", img: "images/London-Single_Bed_Room.png", price: "$110" },
            { name: "Double Bed Room", img: "images/London-Double_Bed_Room.png", price: "$160" },
            { name: "Standard Suite", img: "images/London-Standard_Suite.png", price: "$210" },
            { name: "Presidential Suite", img: "images/London-Presidential_Suite.png", price: "$520" }
        ],
        "Rome": [
            { name: "Single Bed Room", img: "images/Rome-Single_Bed_Room.png", price: "$120" },
            { name: "Double Bed Room", img: "images/Rome-Double_Bed_Room.png", price: "$170" },
            { name: "Standard Suite", img: "images/Rome-Standard_Suite.png", price: "$220" },
            { name: "Presidential Suite", img: "images/Rome-Presidential_Suite.png", price: "$530" }
        ],
        "Beijing": [
            { name: "Single Bed Room", img: "images/Beijing-Single_Bed_Room.png", price: "$90" },
            { name: "Double Bed Room", img: "images/Beijing-Double_Bed_Room.png", price: "$140" },
            { name: "Standard Suite", img: "images/Beijing-Standard_Suite.png", price: "$190" },
            { name: "Presidential Suite", img: "images/Beijing-Presidential_Suite.png", price: "$480" }
        ],
        "Tokyo": [
            { name: "Single Bed Room", img: "images/Tokyo-Single_Bed_Room.png", price: "$130" },
            { name: "Double Bed Room", img: "images/Tokyo-Double_Bed_Room.png", price: "$180" },
            { name: "Standard Suite", img: "images/Tokyo-Standard_Suite.png", price: "$230" },
            { name: "Presidential Suite", img: "images/Tokyo-Presidential_Suite.png", price: "$540" }
        ],
        "Kuala Lumpur": [
            { name: "Single Bed Room", img: "images/Kuala_Lumpur-Single_Bed_Room.png", price: "$80" },
            { name: "Double Bed Room", img: "images/Kuala_Lumpur-Double_Bed_Room.png", price: "$130" },
            { name: "Standard Suite", img: "images/Kuala_Lumpur-Standard_Suite.png", price: "$180" },
            { name: "Presidential Suite", img: "images/Kuala_Lumpur-Presidential_Suite.png", price: "$470" }
        ]
    };

    let currentRoomIndex = 0;

    function updateRoomDisplay(country) {
        const rooms = roomTypes[country];
        roomTypeSpan.textContent = rooms[currentRoomIndex].name;
        roomImage.src = rooms[currentRoomIndex].img;
        roomPrice.textContent = rooms[currentRoomIndex].price;
    }

    countrySelect.addEventListener("change", function () {
        const selectedCountry = this.value;
        hotelImage.src = hotelImages[selectedCountry] || "images/default-hotel.jpg";
        currentRoomIndex = 0;
        updateRoomDisplay(selectedCountry);
    });

    prevRoomBtn.addEventListener("click", function () {
        currentRoomIndex = (currentRoomIndex - 1 + 4) % 4;
        updateRoomDisplay(countrySelect.value);
    });

    nextRoomBtn.addEventListener("click", function () {
        currentRoomIndex = (currentRoomIndex + 1) % 4;
        updateRoomDisplay(countrySelect.value);
    });

    paymentBtn.addEventListener("click", function () {
        paymentOptions.classList.toggle("hidden");
    });
});
