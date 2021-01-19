import { useGetStaticPaths, useGetStaticProps } from "src/next.helpers"

export const getStaticProps = useGetStaticProps("info-dev")

export const getStaticPaths = useGetStaticPaths("info-dev")

export { default } from "../info/[uid]"
