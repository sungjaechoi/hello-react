import { useState } from 'react';

// node_Module css
// import styles from './CSSModule.module.css'

// node_Module scss
import styles from './CSSModule.module.scss'
import classnames from 'classnames/bind'

const css = classnames.bind(styles);

const CSSModule = () => {

  //classnames 라이브러리를 사용하지 않고 class를 조건부 사용 시
  const { warpper, inverted } = styles;

  //classnames 라이브러리 사용 시 state 전달 class 조건부 사용
  const [divToggle, setDivToggle] = useState(false);
  const onClick = () => {
    divToggle ? setDivToggle(false) : setDivToggle(true);
  };

  return (
    // CSSModule 사용시 ClassName에 "className={styles.클래스이름}" 형태로 전달
    // 출력 시 .파일이름_클래스이름_해시값 형태로 노출

    // 클래스 네임을 두개 사용시
    //백틱을 활용 한 방법, 배열을 활용한 빙법
    <>
      {/* 백틱 */}
      <div className={`${styles.warpper} ${styles.warpper}`}>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
      </div>
      {/* 배열 */}
      <div className={[styles.warpper, styles.inverted].join(" ")}>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
      </div>
      {/* classnames 사용 x */}
      <div className={`${warpper} ${inverted ? "" : inverted}`}>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
      </div>
      {/* classnames 라이브러 */}
      <div
        className={css("warpper", { inverted: divToggle })}
        onClick={onClick}
      >
        안녕하세요, 저는 <span className="something">CSS Module!</span>
      </div>
    </>
  );
}

export default CSSModule;
