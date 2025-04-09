export default function decorate(block) {
  const form = document.createElement('form');
  console.log('✅ Form block loaded');
  [...block.children].forEach((row) => {
    const labelText = row.children[0]?.textContent.trim().toLowerCase();
    const value = row.children[1]?.textContent.trim();

    if (labelText === 'label') {
      const label = document.createElement('label');
      label.textContent = value;

      const input = document.createElement('input');
      input.name = value.toLowerCase().replace(/\s+/g, '-');

      form.appendChild(label);
      form.appendChild(document.createElement('br'));
      form.appendChild(input);
      form.appendChild(document.createElement('br'));
    }

    if (labelText === 'submit') {
      const button = document.createElement('button');
      button.type = 'submit';
      button.textContent = value;
      form.appendChild(document.createElement('br'));
      form.appendChild(button);
    }
  });

  block.innerHTML = ''; // clear block content
  block.appendChild(form);
}
