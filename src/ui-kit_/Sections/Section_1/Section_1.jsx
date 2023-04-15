import "./Section_1.css";
import Background_1 from "../Assets/Background_1.png";
import SectionWrapper from "../../SectionWrapper/SectionWrapper";
import Foto_Ira_1 from "../Assets/Foto_Ira_1.png";
import { ReactComponent as Vk } from "../Assets/Icons/Vk.svg";
import { ReactComponent as Be } from "../Assets/Icons/Be.svg";
import { ReactComponent as Telegram } from "../Assets/Icons/Telegram.svg";
import { ReactComponent as Whatsapp } from "../Assets/Icons/Whatsapp.svg";

const Section_1 = () => {
  return (
    <SectionWrapper>
      <div className="Ground_foto_section_1">
        <img className="Background_1" src={Background_1}></img>
        <img className="Foto_Ira_1" src={Foto_Ira_1}></img>
        <div className="Body">
          <div className="Body_BorderUnite_1">
            <div className="Body_unite_1">Ирина Смирнова</div>
          </div>
          <div className="Body_unite_2">
            <div className="Body_blocks_section_1">
              <div className="Body_disign">Дизайнер</div>
              <div className="Body_aboutAndAchivement_section_1">
                <div className="Body_aboutMe_section_1">
                  <div>Блок «О себе»: </div>
                  <div>Опыт работы: </div>
                  <div>Интересы: </div>
                  <div>Участие в проектах: </div>
                </div>
                <div className="Body_achivement_section_1">
                  <div>Блок «Достижения»: </div>
                  <div>Участие в мероприятиях: </div>
                  <div>Победы в мероприятиях: </div>
                </div>
              </div>
              <div className="Body_iconsPortfolio_section_1">
                <div className="Body_icons_section_1">
                  <div>
                    <Vk />
                  </div>
                  <div>
                    <Be />
                  </div>
                  <div>
                    <Telegram />
                  </div>
                  <div>
                    <Whatsapp />
                  </div>
                </div>
                <div className="Body_border_portfolio">
                  <div className="Body_portfolio_section_1">
                    <div>Портфолио</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Body_unite_3">
            <div className="Body_addContact_section_1">Добавить в контакты</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Section_1;
