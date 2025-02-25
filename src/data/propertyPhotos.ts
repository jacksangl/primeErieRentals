interface PropertyPhotos {
  [key: number]: {
    title: string;
    photos: {
      id: number;
      image: string;
      description: string;
    }[];
  };
}

export const propertyPhotos: PropertyPhotos = {
  1: {
    title: 'Single Family House - near LECOM',
    photos: [
      {
        id: 1,
        image: '/pictures/single_family_lecom/front.png',
        description: 'Front view of the property',
      },
      {
        id: 2,
        image: 'pictures/single_family_lecom/living.png',
        description: 'Living room area',
      },
      {
        id: 3,
        image: 'pictures/single_family_lecom/kitchen.png',
        description: 'Modern kitchen',
      },
      {
        id: 4,
        image: 'pictures/single_family_lecom/floors.png',
        description: 'New Flooring',
      },

    ],
  },


  2: {
    title: 'Single Family House - near LECOM, Presque Isle',
    photos: [
      {
        id: 1,
        image: 'pictures/single_family/front.jpg',
        description: 'Front Angle',
      },
      {
        id: 2,
        image: 'pictures/single_family/kitchen.jpg',
        description: 'Kitchen View',
      },
      {
        id: 3,
        image: 'pictures/single_family/inside.jpg',
        description: 'Inside View',
      },
      {
        id: 4,
        image: 'pictures/single_family/bathroom.jpg',
        description: 'Full Bathroom',
      },
      {
        id: 5,
        image: 'pictures/single_family/basement.jpg',
        description: 'Basement with new boiler',
      },
    ],
  },


  3: {
    title: 'Single Family House - West Side of Erie',
    photos: [
      {
        id: 1,
        image: 'pictures/single_west/front.png',
        description: 'Front view of the property',
      },
      {
        id: 2,
        image: 'pictures/single_west/kitchen.png',
        description: 'Modern kitchen',
      },
      {
        id: 3,
        image: 'pictures/single_west/livingroom.png',
        description: 'Living room area',
      },
      {
        id: 4,
        image: 'pictures/single_west/backyard.png',
        description: 'Back yard view',
      },
      {
        id: 5,
        image: 'pictures/single_west/bathroom.png',
        description: 'Quality bathroom',
      },
      {
        id: 6,
        image: 'pictures/single_west/upstairs.png',
        description: 'Wide upstairs space',
      },
    ],
  },


  4: {
    title: 'Millcreek Townhome Complex - 4 Units',
    photos: [
      {
        id: 1,
        image: 'pictures/4unit/front.jpg',
        description: 'Front view of the complex',
      },
      {
        id: 2,
        image: 'pictures/4unit/kitchen.png',
        description: 'Kitchen View',
      },
      {
        id: 3,
        image: 'pictures/4unit/basement.png',
        description: 'Basement for extra storage',
      },
      {
        id: 4,
        image: 'pictures/4unit/back.png',
        description: 'Back exterior view',
      },
    ],
  },


  5: {
    title: 'Swanville Apartments - 14 Units',
    photos: [
      {
        id: 1,
        image: 'pictures/swan/front.png',
        description: 'Building exterior',
      },
      {
        id: 2,
        image: 'pictures/swan/frontcloseup.jpg',
        description: 'A more closeup view',
      },
      {
        id: 3,
        image: 'pictures/swan/closeup.jpg',
        description: 'Side view closeup',
      },
    ],
  },

  6: {
    title: 'Canterbury Apartments - 12 Units',
    photos: [
      {
        id: 1,
        image: 'pictures/canter/front.jpg',
        description: 'Front View',
      },
      {
        id: 2,
        image: 'pictures/canter/back.jpg',
        description: 'A View from the Back',
      },
      {
        id: 3,
        image: 'pictures/canter/parking.jpg',
        description: 'The Parking Area',
      },
    ],
  },
  // Add more properties here...
}; 