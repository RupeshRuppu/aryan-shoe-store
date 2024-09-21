export const saveUser = user => {
	localStorage.setItem("SLIPPER-BOSS-USER", JSON.stringify(user));
};

export const deleteUser = () => {
	localStorage.clear("SLIPPER-BOSS-USER");
};
