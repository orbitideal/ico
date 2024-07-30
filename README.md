# Ico

## Standardise icon names across different icon libraries.
**Ico** is an open-source project mapping icon sets from various popular libraries into an unified naming convention. The goal is to standardise icon names across different sets, making it easier for developers and designers to use and switch between multiple icon libraries without worrying about inconsistent naming ✨.


## Supported Icon Libraries
- [🔗](https://github.com/hugeicons/hugeicons-react) Huge Icons 🟰 "hugeicons"
- [🔗](https://github.com/iconoir-icons/iconoir) Iconoir 🟰 "iconoir"
- [🔗](https://github.com/lucide-icons/lucide) Lucide 🟰 "lucide"
- [🔗](https://github.com/Templarian/MaterialDesign) Material Design Icons 🟰 "mdi"
- [🔗](https://github.com/halfmage/pixelarticons) Pixelarticons 🟰 "pixelarticons"
- and more to be added...


## Dependency
❤️ Currently it is provided as a React component and uses [tailwindcss-icons](https://github.com/egoist/tailwindcss-icons), read their guide to setup it.


## Usage
💡 To use **Ico** in your project, simply download or copy the folder [ico](src/ico) inside your project, import **Ico** and refer to the standardised names for icons as defined in the file [map](src/ico/map.ts). 

For example:
- Instead of using specific library names like `mdi-home` or `icn-home`, use the standardised name `home`.

This standardisation is ideal to easily swap out icons from different libraries set without changing the icon names in your code.


## Example
```javascript
// Example of using Ico

import Ico from '@/components/ico'

export function IconComponent() {
  return <Ico name="caret-right" set="mdi" className="size-4" />;
}
```

In this example, `caret-right` is the standardised icon name. The actual icon is chosen based on the imported icon library set, defined as `mdi` in this example.


## Features
- **Growing database of Icons**: there are currently 65 icons for each set.
- **Unified Naming Convention**: establishes consistent names for similar icons across different libraries. An icon representing ➡️, an arrow pointing right, is uniformly named `arrow-right` regardless of the source library.
- **Icon Mapping**: mapping of original icon names to the standardised names. This is useful for both reference and implementation purposes.
- **Comprehensive Coverage**: includes mappings for a wide range of popular icon libraries, with continuous updates as new icons are added.
- **Community Driven**: open to contributions from the community for adding new mappings, suggesting improvements, and keeping the repository up-to-date.


## Contributing
🤙 Contributions are welcome!

If you have suggestions, find inconsistencies, or want to add new mappings for new icon libraries, feel free to submit a pull request or open an issue.


## License
This project is made by Andrea @orbitideal and it is licensed under the [MIT License](LICENSE).

---

✨ Join us in making icon usage more consistent and developer-friendly across different libraries with **Ico**!
