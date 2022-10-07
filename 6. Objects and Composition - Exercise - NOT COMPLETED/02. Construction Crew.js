function constructionCrew(obj) {
  if (obj.dizziness === true) {
    let hydrated = 0.1 * obj.weight * obj.experience;
    obj.levelOfHydrated += hydrated;
    obj.dizziness = false;
    return obj;
  } else {
    return obj;
  }
}
constructionCrew({
  weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false,
});
