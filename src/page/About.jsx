import { AboutSection, ConBoxStyle, Container } from "./style";

const About = () => {
  return (
    <Container>
      <AboutSection>
        <div className="inner">
          <h2>CEO MESSAGE</h2>
          <p class="title">
            더욱 단단한 <br /> 금융그룹이 되도록 <br /> 노력하겠습니다.
          </p>

          <ConBoxStyle>
            <div className="left">
              <img src="https://www.jbfg.com/assets/img/about/ceo.jpg" alt="" />
            </div>
            <div className="right">
              <h3>
                안녕하세요,
                <br />
                JB금융그룹 회장 김기홍입니다.
              </h3>

              <p>
                먼저 JB금융그룹의 성장을 이끌어 주시는 고객님들과 주주님들,
                <br /> 그리고 그룹 임직원 모든 분들에게 진심으로 깊이
                감사드립니다.
              </p>
              <p>
                JB금융그룹은 전북은행, 광주은행, JB우리캐피탈, JB자산운용,
                JB인베스트먼트
                <br />
                등 5개의 국내 계열사와 PPCBank, JB PPAM, JB Capital Myanmar,
                <br />
                JB Securities Vietnam 등 4개의 해외 손자회사를 거느린 종합
                금융그룹으로
                <br />
                성장하였습니다.{" "}
              </p>
              <p>
                앞으로도 JB금융그룹은 강한 금융으로 성장하기 위해, 국내외
                금융시장에서
                <br />
                JB금융그룹만의 차별화된 핵심가치를 정립하고 발전시켜 더욱 단단한
                금융그룹이
                <br />
                되도록 최선의 노력을 다 하겠습니다.{" "}
              </p>
              <p>
                더불어 고객과 주주 등 외부 이해관계자들과 적극적으로 소통하고
                지역발전에도
                <br />
                기여함으로써 사회에서 신뢰받는 JB금융그룹이 되도록 맡은 바 임무
                충실하겠습니다.{" "}
              </p>
              <p>
                이러한 JB금융그룹의 노력에 따뜻한 관심과 격려를 부탁드리며,
                <br />
                앞으로도 JB금융그룹과 함께 해주시기를 부탁드립니다.
                <br />
                감사합니다.
              </p>
              <strong>JB금융그룹 회장 김기홍</strong>
            </div>
          </ConBoxStyle>
        </div>
      </AboutSection>
    </Container>
  );
};

export default About;
