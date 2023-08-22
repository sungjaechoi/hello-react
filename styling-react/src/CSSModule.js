import styles from './CSSModule.module.css'

const CSSModule = () => {
  return (
    // CSSModule 사용시 ClassName에 "className={styles.클래스이름}" 형태로 전달
    // 출력 시 .파일이름_클래스이름_해시값 형태로 노출
    <div className={styles.warpper}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
}

export default CSSModule;
