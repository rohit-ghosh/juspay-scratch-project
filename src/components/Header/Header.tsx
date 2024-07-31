import { RepoLink, RootContainer, Title } from "./Style";

export function Header () {
  return (
    <RootContainer className="h-10 p-5 items-center">
        <Title>Juspay Scratch Project</Title>
        <RepoLink href="https://github.com/rohit-ghosh/juspay-scratch-project">Repository link</RepoLink>
    </RootContainer>
  );
}
