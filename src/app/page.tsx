/**
 * Copyright 2024 Taeyoon Lee. All Right Reserved.
 *
 * This source code is licensed under the file found in the
 * LICENSE file in the root directory of this source tree.
 */

import stylex from "@stylexjs/stylex";

import type { PageProps } from "@/types";

/**
 * ### 루트 페이지
 *
 * 이력서 메인 페이지입니다.
 *
 * @param props {@link PageProps}
 * @page
 */
const RootPage = (_props: PageProps) => {
  return <main {...stylex.props(styles.main)}>테스트입니다.</main>;
};

/**
 * ### Stylex 스타일
 *
 * stylex 기반의 스타일을 정의합니다.
 */
const styles = stylex.create({
  main: {
    color: "red",
    backgroundColor: "#000000",
  },
});

export default RootPage;
