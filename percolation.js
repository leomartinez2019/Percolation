// Percolation code

export function getRoot(indx, lista) {
  while (indx !== lista[indx]) {
    lista[indx] = lista[lista[indx]];
    indx = lista[indx];
  }
  return indx
}

export function connected(p, q, lista) {
  return getRoot(p, lista) === getRoot(q, lista);
}

export function union(p, q, lista, tree) {
  let ip = getRoot(p, lista);
  let iq = getRoot(q, lista);
  if (ip === iq) return;
  if (tree[ip] < tree[iq]) {
    lista[ip] = iq;
    tree[iq] += tree[ip];
  } else {
    lista[iq] = ip;
    tree[ip] += tree[iq];
  }
}

// Random number generator
export function randomInt(limit) {
  return Math.floor(Math.random() * limit);
}

// Open site in grid:
export function openSite(p, lista, tree, openSites) {
  if (!openSites[p]) {
    openSites[p] = true;
    if (p < 20) {
      union(p, 400, lista, tree);
      //union(400, p, lista, tree);
    }
    joinAdjacents(p, lista, openSites);

    //if (p < 400 && p > 379) {
      //union(p, 401, lista, tree);
      //union(401, p, lista, tree);
    //}

  }
}

export function joinAdjacents(p, lista, openSites) {
  let up = p - 20;
  let down = p + 20;
  let left = p - 1;
  let right = p + 1;
  if (up >= 0 && isOpen(up, openSites)) {
    union(p, up, lista, openSites);
  }

  if (down < 400 && isOpen(down, openSites)) {
    union(p, down, lista, openSites);
  }

  if (left >= Math.floor(p / 20) * 20 && isOpen(left, openSites)) {
    union(p, left, lista, openSites);
  }

  if (right < Math.ceil((p + 1) / 20) * 20 && isOpen(right, openSites)) {
    union(p, right, lista, openSites);
  }
}

export function isOpen(p, openSites) {
  return openSites[p];
}
