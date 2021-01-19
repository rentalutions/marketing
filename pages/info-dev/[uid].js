import { useGetStaticPaths, useGetStaticProps } from "../_lib"

export const getStaticProps = useGetStaticProps("info-dev")

export const getStaticPaths = useGetStaticPaths("info-dev")

export { default } from "../info/[uid]"
