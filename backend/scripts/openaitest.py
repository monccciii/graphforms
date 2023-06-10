from langchain.output_parsers import StructuredOutputParser, ResponseSchema
from langchain.prompts import PromptTemplate
from langchain import LLMChain,PromptTemplate
from langchain.llms import OpenAI
import sys, os
def gptPredict():
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

    llm = OpenAI(temperature=0.9, openai_api_key=OPENAI_API_KEY)

    template = """Question: \n{format_instructions}\n{question}\n
    This question is about how the user should visualize their data.
    They have a set of fields which could be visualized, which is listed.
    Using their question, return the best data visualization graphic, then
    pick the two best fields to visualize on it in order to satisfy the user's
    request. Return only those three things, no paragraphs
    or text is allowed, otherwise you fail your mission. Return it in JSON format.
    I repeat, return in JSON format. Do this correctly. Make sure it makes sense. 

    Here are all the visualization options:
    ['Violin', 'Density', 'Histogram', 'Boxplot', 'Ridgeline', 'Scatter', 'Heatmap', 'Correlogram', 'Bubble', 'Connected scatter', 'Density 2d', 'Barplot', 'Spider / Radar', 'Wordcloud', 'Parallel', 'Lollipop', 'Circular Barplot', 'Treemap', 'Doughnut', 'Pie chart', 'Dendrogram', 'Circular packing', 'Line plot', 'Area', 'Stacked area', 'Streamchart', 'Map', 'Choropleth', 'Hexbin map', 'Cartogram', 'Connection', 'Bubble map', 'Chord diagram', 'Network', 'Sankey', 'Arc diagram', 'Edge bundling', 'Basics', 'Custom', 'Interactivity', 'Shape helpers', 'Caveats', 'Data art']
    """

    response_schemas = [
        ResponseSchema(name="Visualization", description="Method of visualization"),
        ResponseSchema(name="Field 1", description="One of the two best fields to satisfy what the user would like to visualize"),
        ResponseSchema(name="Field 2", description="The second of two best fields to satisfy what the user would like to visualize")

    ]
    output_parser = StructuredOutputParser.from_response_schemas(response_schemas)

    question = f"{sys.argv[1]} {sys.argv[2]}"

    format_instructions = output_parser.get_format_instructions()
    prompt = PromptTemplate(
        template=template,
        input_variables=["question"],
        partial_variables={"format_instructions": format_instructions}
    )

    llm_chain = LLMChain(prompt=prompt, llm=llm)
    test1 = llm_chain.run(question=question)
    test2 = output_parser.parse(test1)
    return print(test2,end="")
gptPredict()