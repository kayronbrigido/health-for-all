import i18n from "../i18n";
import { langOption } from "../models";

const options = [
  {
    id: 0,
    name: 'Português',
    code: 'pt'
  },
  {
    id: 1,
    name: 'English',
    code: 'en'
  },
]

const HandleLanguage = () => {
  return (
    <div>
      <ul>
        {options.map((option: langOption) => (
          <li>
            <button
              onClick={() => {
                i18n.changeLanguage(option.code);
                window.location.reload()
              }}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>)
}

export default HandleLanguage