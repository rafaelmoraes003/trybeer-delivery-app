function getTypeColor(type) {
  switch (type) {
  case 'Preparando': return '#66CC00';
  case 'Pendente': return '#CCB800';
  default: return '#00CC9B';
  }
}

export default getTypeColor;
