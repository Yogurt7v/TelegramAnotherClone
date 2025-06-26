function randomAvatar() {
  return Math.floor(10_000_000 + Math.random() * 90_000_000).toString();
}

export default randomAvatar;
