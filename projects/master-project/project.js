const stateData = {
  AZ: [100, 99.5, 122.8, 155.9, 296.2, 192.2, 246.8, 358.5, 551],
  CA: [100, 145.4, 129.5, 181.6, 397.8, 258.1, 341.6, 444.7, 618.7],
  FL: [100, 109.3, 122.8, 152.4, 319, 207.1, 257.1, 367.9, 588.9],
  IL: [100, 121.2, 147.1, 179.8, 253.6, 223.7, 225.5, 259.4, 388.5],
  NY: [100, 102.9, 104.4, 133.2, 228.2, 213, 218.7, 276.3, 426.2],
  OH: [100, 115.4, 144.3, 177.6, 211.6, 193.4, 200, 261.2, 404.1],
  TX: [100, 101.8, 117, 144.6, 176.7, 193.7, 237.8, 318, 459.8]
};
const years = [1987, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025];
const colors = { AZ: '#e9b588', CA: '#82e0cf', FL: '#a9a8e8', IL: '#e6d17e', NY: '#f28f8f', OH: '#9db8e8', TX: '#c59de8' };

const questions = document.querySelectorAll('.question-item');
questions.forEach(question => question.addEventListener('click', () => {
  const open = question.classList.contains('is-open');
  questions.forEach(item => { item.classList.remove('is-open'); item.setAttribute('aria-expanded', 'false'); });
  if (!open) { question.classList.add('is-open'); question.setAttribute('aria-expanded', 'true'); }
}));

const chart = document.querySelector('#state-chart');
if (chart) {
  const grid = chart.querySelector('.chart-grid');
  const lines = chart.querySelector('.chart-lines');
  const labels = chart.querySelector('.chart-labels');
  const legend = document.querySelector('#chart-legend');
  const left = 52, top = 20, width = 820, height = 310, min = 80, max = 660;
  const x = index => left + (index / (years.length - 1)) * width;
  const y = value => top + height - ((value - min) / (max - min)) * height;
  [100, 200, 300, 400, 500, 600].forEach(value => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', left); line.setAttribute('x2', left + width); line.setAttribute('y1', y(value)); line.setAttribute('y2', y(value)); grid.appendChild(line);
    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text'); label.setAttribute('x', 4); label.setAttribute('y', y(value) + 4); label.textContent = value; labels.appendChild(label);
  });
  years.forEach((year, index) => { const label = document.createElementNS('http://www.w3.org/2000/svg', 'text'); label.setAttribute('x', x(index)); label.setAttribute('y', 365); label.setAttribute('text-anchor', 'middle'); label.textContent = year; labels.appendChild(label); });
  Object.entries(stateData).forEach(([state, values]) => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.classList.add('chart-line'); path.dataset.state = state; path.style.stroke = colors[state]; path.setAttribute('d', values.map((value, index) => `${index ? 'L' : 'M'} ${x(index)} ${y(value)}`).join(' ')); lines.appendChild(path);
    const item = document.createElement('span'); item.className = 'legend-item'; item.dataset.state = state; item.innerHTML = `<i class="legend-dot" style="background:${colors[state]}"></i>${state}`; legend.appendChild(item);
  });
  const filters = document.querySelectorAll('.state-filter');
  filters.forEach(filter => filter.addEventListener('click', () => {
    const selected = filter.dataset.state;
    filters.forEach(item => item.classList.toggle('is-active', item === filter));
    chart.querySelectorAll('.chart-line').forEach(line => { line.classList.toggle('is-muted', selected !== 'all' && line.dataset.state !== selected); line.classList.toggle('is-selected', selected !== 'all' && line.dataset.state === selected); });
  }));
}

const sections = [...document.querySelectorAll('main section[id]')];
const railLinks = [...document.querySelectorAll('.progress-rail a')];
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) railLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`)); }), { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => observer.observe(section));
