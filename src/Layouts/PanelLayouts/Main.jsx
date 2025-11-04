import { AdminPanelItemData } from "../../Constants";

const Main = ({ ActivePage }) => {
     const parentIndex = ActivePage.parent;
     const childIndex = ActivePage.child;

     const selectedItem = AdminPanelItemData[parentIndex];
     const displayPage =
          selectedItem && selectedItem.child && selectedItem.child[childIndex]
               ? selectedItem.child[childIndex].page
               : selectedItem?.page || "No content available";

     return (
          <section className="w-full h-max bg-dark rounded-xl text-white overflow-auto ">
               {displayPage}
          </section>
     );
};

export default Main;
