import styles from '../styles/ToolSection.module.scss'
import Image from 'next/image'

import search from '../public/img/search.svg'
import filter from '../public/img/filter.svg'
import arrowDown from '../public/img/arrow-down.svg'
import arrowRight from '../public/img/arrow-right.svg'

export default function ToolSection() {
  return (
    <div className={styles.ToolsSection}>
      <div className={styles.SectionContainer}>
        <div className={styles.Header}>
          <p>這些超酷的應用，都來自 AI工具王</p>
        </div>
        <div className={styles.Setting}>
          <div className={styles.Search}>
            <Image src={search} alt="search" priority="true" width={24} />
            <input
              type="text"
              placeholder="輸入關鍵字搜尋"
              className={styles.SearchInput}
            />
          </div>
          <div className={styles.Filter}>
            <div className={styles.FilterSelection}>
              篩選
              <Image
                src={filter}
                alt="filter"
                priority="true"
                width={16}
                height={16}
              />
            </div>
            <div className={styles.Options}>
              <ul className={styles.OptionsContainer}>
                <li className={styles.ActiveOption}>全部</li>
                <li>聊天</li>
                <li>影像辨識</li>
                <li>翻譯</li>
                <li>行銷</li>
                <li>克服</li>
                <li>生產力</li>
              </ul>
            </div>
            <div className={styles.FilterSelection}>
              由新到舊
              <Image
                src={arrowDown}
                alt="arrowDown"
                priority="true"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
        <div className={styles.Tools}>
          <div className={styles.Card}>
            <div className={styles.ImgContainer}>
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool1.png?raw=true"
                alt=""
                className={styles.ToolImg}
              />
            </div>
            <div className={styles.InfoBox}>
              <div className={styles.Info}>
                <h3>Chatbot Builder</h3>
                <p>
                  建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。
                </p>
              </div>
              <div className={styles.ModuleInfo}>
                <div className={styles.ModuleType}>AI 模型</div>
                <div>卡卡</div>
              </div>
              <div className={styles.Function}>
                <div className={styles.FunctionName}>#聊天</div>
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={styles.Card}>
            <div className={styles.ImgContainer}>
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool2.png?raw=true"
                alt=""
                className={styles.ToolImg}
              />
            </div>

            <div className={styles.InfoBox}>
              <div className={styles.Info}>
                <h3>Image Recognition Platform</h3>
                <p>專業的圖像識別平台，識別圖像、分類、標記等。 </p>
              </div>
              <div className={styles.ModuleInfo}>
                <div className={styles.ModuleType}>AI 模型</div>
                <div>杰杰</div>
              </div>
              <div className={styles.Function}>
                <div className={styles.FunctionName}>#影像辨識</div>
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={styles.Card}>
            <div className={styles.ImgContainer}>
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool3.png?raw=true"
                alt=""
                className={styles.ToolImg}
              />
            </div>

            <div className={styles.InfoBox}>
              <div className={styles.Info}>
                <h3>Language Translation API</h3>
                <p>
                  專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。
                </p>
              </div>
              <div className={styles.ModuleInfo}>
                <div className={styles.ModuleType}>AI 模型</div>
                <div>琪琪</div>
              </div>
              <div className={styles.Function}>
                <div className={styles.FunctionName}>#翻譯</div>
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={styles.Card}>
            <div className={styles.ImgContainer}>
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool4.png?raw=true"
                alt=""
                className={styles.ToolImg}
              />
            </div>

            <div className={styles.InfoBox}>
              <div className={styles.Info}>
                <h3>Sentiment Analysis API</h3>
                <p>
                  自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。
                </p>
              </div>
              <div className={styles.ModuleInfo}>
                <div className={styles.ModuleType}>AI 模型</div>
                <div>昊昊</div>
              </div>
              <div className={styles.Function}>
                <div className={styles.FunctionName}>#行銷</div>
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={styles.Card}>
            <div className={styles.ImgContainer}>
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool5.png?raw=true"
                alt=""
                className={styles.ToolImg}
              />
            </div>

            <div className={styles.InfoBox}>
              <div className={styles.Info}>
                <h3>Fraud Detection Platform</h3>
                <p>預防詐騙活動，適用於銀行、金融、電商等。</p>
              </div>
              <div className={styles.ModuleInfo}>
                <div className={styles.ModuleType}>AI 模型</div>
                <div>卡卡</div>
              </div>
              <div className={styles.Function}>
                <div className={styles.FunctionName}>#客服</div>
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={styles.Card}>
            <div className={styles.ImgContainer}>
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool6.png?raw=true"
                alt=""
                className={styles.ToolImg}
              />
            </div>

            <div className={styles.InfoBox}>
              <div className={styles.Info}>
                <h3>Voice Assistant SDK</h3>
                <p>
                  通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。
                </p>
              </div>
              <div className={styles.ModuleInfo}>
                <div className={styles.ModuleType}>AI 模型</div>
                <div>杰杰</div>
              </div>
              <div className={styles.Function}>
                <div className={styles.FunctionName}>#生產力</div>
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <ul className={styles.Pagination}>
          <li className={styles.ActivePage}>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>
            <Image
              src={arrowRight}
              alt="arrowRight"
              priority="true"
              width={16}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
