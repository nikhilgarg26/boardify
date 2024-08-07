export default function Page({ params }: { params: { userId: string } }) {

    return (
      <>
        hello world: {params.userId}
      </>
    );
  }
  