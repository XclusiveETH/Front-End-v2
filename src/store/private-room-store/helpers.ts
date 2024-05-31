import { INFTItem, IRarityRankItem } from "@/swapup-types";
import { IPrivateRoomStoreState, SUT_GridViewType } from "./types";

export const toggleGridViewHelper = (
  state: IPrivateRoomStoreState,
  key: 'sender' | 'receiver',
  value: SUT_GridViewType
): IPrivateRoomStoreState => {
  return ({
    ...state,
    [key]: {
      ...state[key],
      activeGridView: value,
    },
  });
};

export const setSelectedNftsForSwapHelper = (
  state: IPrivateRoomStoreState,
  key: 'sender' | 'receiver',
  selectedNftsParams: INFTItem[] | []
): IPrivateRoomStoreState => ({
  ...state,
  [key]: {
    ...state[key],
    nftsSelectedForSwap: selectedNftsParams,
  }
});

export const setFilteredNftsBySearchHelper = (
  state: IPrivateRoomStoreState,
  key: 'sender' | 'receiver',
  searchValue: string
): IPrivateRoomStoreState => {
  const lowerCaseSearchValue = searchValue.toLowerCase();

  return {
    ...state,
    [key]: {
      ...state[key],
      filteredNfts: searchValue
        ? state[key].nfts?.filter((nft) =>
          nft.id.toLowerCase().includes(lowerCaseSearchValue) ||
          nft.title.toLowerCase().includes(lowerCaseSearchValue)
        )
        : state[key].nfts,
    },
  };
};

export const setFilteredNftsByFiltersHelper = (
  state: IPrivateRoomStoreState,
  key: 'sender' | 'receiver',
  collectionTitle: string,
  selectedRarityRank: IRarityRankItem
): IPrivateRoomStoreState => {
  const lowerCaseCollectionTitle = collectionTitle.toLowerCase();

  console.log("flitered items--->", state[key].nfts?.filter(nft => (nft.rarityRank >= selectedRarityRank.from && nft.rarityRank <= selectedRarityRank.to)));

  return {
    ...state,
    [key]: {
      ...state[key],
      filteredNfts: (collectionTitle && selectedRarityRank)
        ? state[key].nfts?.filter((nft) =>
          nft.collection.toLowerCase().includes(lowerCaseCollectionTitle) &&
          (nft.rarityRank >= selectedRarityRank.from && nft.rarityRank <= selectedRarityRank.to)
        )
        : state[key].nfts,
    },
  };
};

export const tempSenderNfts: INFTItem[] = [
  {
    id: '1',
    amount: 10,
    collection: 'cool animals',
    image: '/src/assets/nfts/cool-cat.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 10,
    title: 'cool cat',
    isTopRated: false
  },
  {
    id: '2',
    amount: 3,
    collection: 'cool animals',
    image: '/src/assets/nfts/cool-dog.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 1,
    title: 'cool dog',
    isTopRated: true
  },
  {
    id: '3',
    amount: 5,
    collection: 'cool animals',
    image: '/src/assets/nfts/cool-elephant.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 25,
    title: 'cool elephant',
    isTopRated: true
  },
  {
    id: '4',
    amount: 7,
    collection: 'cool animals',
    image: '/src/assets/nfts/cool-lion.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 6,
    title: 'cool lion',
    isTopRated: false
  },
  {
    id: '5',
    amount: 4,
    collection: 'cool animals',
    image: '/src/assets/nfts/cool-monkey.png',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 3,
    title: 'cool monkey',
    isTopRated: true
  },
  {
    id: '6',
    amount: 2,
    collection: 'cool animals',
    image: '/src/assets/nfts/cool-panada.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 12,
    title: 'cool panda',
    isTopRated: false
  },
  {
    id: '7',
    amount: 6,
    collection: 'cool animals',
    image: '/src/assets/nfts/cool-parrot.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 4,
    title: 'cool parrot',
    isTopRated: true
  },
  {
    id: '8',
    amount: 8,
    collection: 'cool animals',
    image: '/src/assets/nfts/cool-pigeon.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 7,
    title: 'cool pigeon',
    isTopRated: false
  },
  {
    id: '9',
    amount: 1,
    collection: 'cool animals',
    image: '/src/assets/nfts/cool-snake.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 80,
    title: 'cool snake',
    isTopRated: true
  },
  {
    id: '10',
    amount: 9,
    collection: 'cool animals',
    image: '/src/assets/nfts/cool-turtle.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 5,
    title: 'cool turtle',
    isTopRated: false
  }
];

export const tempReceiverNfts: INFTItem[] = [
  {
    id: '1',
    amount: 8,
    collection: 'uncool animals',
    image: '/src/assets/nfts/uncool-cat.png',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 5,
    title: 'uncool cat',
    isTopRated: true
  },
  {
    id: '2',
    amount: 8,
    collection: 'uncool animals',
    image: '/src/assets/nfts/uncool-dog.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 17,
    title: 'uncool dog',
    isTopRated: false
  },
  {
    id: '3',
    amount: 6,
    collection: 'uncool animals',
    image: '/src/assets/nfts/uncool-elephant.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 9,
    title: 'uncool elephant',
    isTopRated: false
  },
  {
    id: '4',
    amount: 7,
    collection: 'uncool animals',
    image: '/src/assets/nfts/uncool-lion.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 1,
    title: 'uncool lion',
    isTopRated: true
  },
  {
    id: '5',
    amount: 5,
    collection: 'uncool animals',
    image: '/src/assets/nfts/uncool-monkey.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 30,
    title: 'uncool monkey',
    isTopRated: true
  },
  {
    id: '6',
    amount: 9,
    collection: 'uncool animals',
    image: '/src/assets/nfts/uncool-panda.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 7,
    title: 'uncool panda',
    isTopRated: false
  },
  {
    id: '7',
    amount: 4,
    collection: 'uncool animals',
    image: '/src/assets/nfts/uncool-parrot.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 77,
    title: 'uncool parrot',
    isTopRated: false
  },
  {
    id: '8',
    amount: 3,
    collection: 'uncool animals',
    image: '/src/assets/nfts/uncool-pigeon.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 3,
    title: 'uncool pigeon',
    isTopRated: true
  },
  {
    id: '9',
    amount: 10,
    collection: 'uncool animals',
    image: '/src/assets/nfts/uncool-snake.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 8,
    title: 'uncool snake',
    isTopRated: false
  },
  {
    id: '10',
    amount: 1,
    collection: 'uncool animals',
    image: '/src/assets/nfts/uncool-turtle.jpg',
    network: {
      id: '1',
      image: "/src/assets/svgs/ethereum.svg",
      title: 'ethereum',
    },
    rarityRank: 105,
    title: 'uncool turtle',
    isTopRated: true
  }
];
