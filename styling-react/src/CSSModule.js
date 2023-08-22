import styles from './CSSModule.module.css'

const CSSModule = () => {
  return (
    // CSSModule 사용시 ClassName에 "className={styles.클래스이름}" 형태로 전달
    // 출력 시 .파일이름_클래스이름_해시값 형태로 노출

    // 클래스 네임을 두개 사용시
    //백틱을 활용 한 방법, 배열을 활용한 빙법
    <>
      {/* 백틱 */}
      <div className={`${styles.warpper} ${styles.inverted}`}>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
      </div>
      {/* 배열 */}
      <div className={[styles.warpper, styles.inverted].join(" ")}>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
      </div>
    </>
  );
}

export default CSSModule;
